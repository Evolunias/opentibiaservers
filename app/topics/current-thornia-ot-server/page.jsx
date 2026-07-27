import CurrentThorniaOtServerKeywordPage, { generateMetadata } from './current-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaOtServerKeywordPage />;
}
