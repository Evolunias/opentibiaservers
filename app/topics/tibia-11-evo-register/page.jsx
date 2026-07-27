import Tibia11EvoRegisterKeywordPage, { generateMetadata } from './tibia-11-evo-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoRegisterKeywordPage />;
}
