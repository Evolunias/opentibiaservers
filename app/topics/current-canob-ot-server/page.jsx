import CurrentCanobOtServerKeywordPage, { generateMetadata } from './current-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobOtServerKeywordPage />;
}
