import Tibia80HighExpRegisterKeywordPage, { generateMetadata } from './tibia-8-0-high-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80HighExpRegisterKeywordPage />;
}
