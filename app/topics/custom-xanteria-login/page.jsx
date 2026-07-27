import CustomXanteriaLoginKeywordPage, { generateMetadata } from './custom-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaLoginKeywordPage />;
}
