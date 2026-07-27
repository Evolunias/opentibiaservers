import CurrentXanteriaOtsKeywordPage, { generateMetadata } from './current-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaOtsKeywordPage />;
}
