import OxygenotPrivateServerKeywordPage, { generateMetadata } from './oxygenot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotPrivateServerKeywordPage />;
}
