import CustomXanteriaOtKeywordPage, { generateMetadata } from './custom-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaOtKeywordPage />;
}
