import CurrentTibiascapeOtKeywordPage, { generateMetadata } from './current-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeOtKeywordPage />;
}
