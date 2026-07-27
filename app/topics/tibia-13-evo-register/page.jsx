import Tibia13EvoRegisterKeywordPage, { generateMetadata } from './tibia-13-evo-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoRegisterKeywordPage />;
}
