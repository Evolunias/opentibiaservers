import CustomXanteriaPrivateServerKeywordPage, { generateMetadata } from './custom-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaPrivateServerKeywordPage />;
}
