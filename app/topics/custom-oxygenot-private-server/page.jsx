import CustomOxygenotPrivateServerKeywordPage, { generateMetadata } from './custom-oxygenot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotPrivateServerKeywordPage />;
}
