import Tibia86ServerRegisterKeywordPage, { generateMetadata } from './tibia-8-6-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerRegisterKeywordPage />;
}
