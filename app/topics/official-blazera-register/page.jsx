import OfficialBlazeraRegisterKeywordPage, { generateMetadata } from './official-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraRegisterKeywordPage />;
}
