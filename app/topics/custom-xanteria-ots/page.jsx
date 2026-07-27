import CustomXanteriaOtsKeywordPage, { generateMetadata } from './custom-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaOtsKeywordPage />;
}
