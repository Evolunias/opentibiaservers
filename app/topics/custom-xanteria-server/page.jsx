import CustomXanteriaServerKeywordPage, { generateMetadata } from './custom-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaServerKeywordPage />;
}
