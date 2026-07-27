import Tibia12EvoRegisterKeywordPage, { generateMetadata } from './tibia-12-evo-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoRegisterKeywordPage />;
}
