import Tibia86LowExpRegisterKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpRegisterKeywordPage />;
}
