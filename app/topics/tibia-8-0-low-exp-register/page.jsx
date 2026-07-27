import Tibia80LowExpRegisterKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpRegisterKeywordPage />;
}
