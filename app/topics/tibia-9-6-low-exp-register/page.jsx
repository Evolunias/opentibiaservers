import Tibia96LowExpRegisterKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpRegisterKeywordPage />;
}
