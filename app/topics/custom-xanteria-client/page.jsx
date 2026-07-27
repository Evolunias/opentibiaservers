import CustomXanteriaClientKeywordPage, { generateMetadata } from './custom-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaClientKeywordPage />;
}
