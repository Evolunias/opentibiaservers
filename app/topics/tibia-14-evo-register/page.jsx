import Tibia14EvoRegisterKeywordPage, { generateMetadata } from './tibia-14-evo-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoRegisterKeywordPage />;
}
