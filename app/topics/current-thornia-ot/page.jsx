import CurrentThorniaOtKeywordPage, { generateMetadata } from './current-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaOtKeywordPage />;
}
