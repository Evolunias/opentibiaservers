import TibiaHighExpServerRegisterKeywordPage, { generateMetadata } from './tibia-high-exp-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerRegisterKeywordPage />;
}
