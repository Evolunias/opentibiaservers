import Tibia11LowExpRegisterKeywordPage, { generateMetadata } from './tibia-11-low-exp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpRegisterKeywordPage />;
}
