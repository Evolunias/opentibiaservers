import ActiveXanteriaOtsKeywordPage, { generateMetadata } from './active-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaOtsKeywordPage />;
}
