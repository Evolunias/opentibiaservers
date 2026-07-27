import TibiaCustomServerRegisterKeywordPage, { generateMetadata } from './tibia-custom-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerRegisterKeywordPage />;
}
