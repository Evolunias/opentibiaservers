import Tibia86EvoRegisterKeywordPage, { generateMetadata } from './tibia-8-6-evo-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86EvoRegisterKeywordPage />;
}
