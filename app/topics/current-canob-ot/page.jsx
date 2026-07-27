import CurrentCanobOtKeywordPage, { generateMetadata } from './current-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobOtKeywordPage />;
}
