import CurrentXanteriaOtKeywordPage, { generateMetadata } from './current-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaOtKeywordPage />;
}
