import Tibia81LowExpRegisterKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpRegisterKeywordPage />;
}
