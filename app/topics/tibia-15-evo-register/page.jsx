import Tibia15EvoRegisterKeywordPage, { generateMetadata } from './tibia-15-evo-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoRegisterKeywordPage />;
}
