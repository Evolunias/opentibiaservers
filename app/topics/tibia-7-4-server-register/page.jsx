import Tibia74ServerRegisterKeywordPage, { generateMetadata } from './tibia-7-4-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerRegisterKeywordPage />;
}
