import Tibia80EvoRegisterKeywordPage, { generateMetadata } from './tibia-8-0-evo-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoRegisterKeywordPage />;
}
