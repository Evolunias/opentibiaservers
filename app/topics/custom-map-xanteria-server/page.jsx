import CustomMapXanteriaServerKeywordPage, { generateMetadata } from './custom-map-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapXanteriaServerKeywordPage />;
}
