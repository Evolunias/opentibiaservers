import Tibia71LowExpRegisterKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpRegisterKeywordPage />;
}
