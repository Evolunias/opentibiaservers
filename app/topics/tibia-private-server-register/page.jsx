import TibiaPrivateServerRegisterKeywordPage, { generateMetadata } from './tibia-private-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerRegisterKeywordPage />;
}
