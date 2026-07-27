import Tibia1098ServerRegisterKeywordPage, { generateMetadata } from './tibia-10-98-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerRegisterKeywordPage />;
}
