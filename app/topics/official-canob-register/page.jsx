import OfficialCanobRegisterKeywordPage, { generateMetadata } from './official-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobRegisterKeywordPage />;
}
