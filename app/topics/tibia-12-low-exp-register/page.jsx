import Tibia12LowExpRegisterKeywordPage, { generateMetadata } from './tibia-12-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpRegisterKeywordPage />;
}
