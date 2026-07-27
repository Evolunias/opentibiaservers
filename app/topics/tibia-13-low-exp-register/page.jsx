import Tibia13LowExpRegisterKeywordPage, { generateMetadata } from './tibia-13-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpRegisterKeywordPage />;
}
