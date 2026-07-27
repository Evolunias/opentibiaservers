import Tibia84LowExpRegisterKeywordPage, { generateMetadata } from './tibia-8-4-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84LowExpRegisterKeywordPage />;
}
