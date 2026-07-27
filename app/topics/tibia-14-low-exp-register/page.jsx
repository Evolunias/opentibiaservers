import Tibia14LowExpRegisterKeywordPage, { generateMetadata } from './tibia-14-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpRegisterKeywordPage />;
}
