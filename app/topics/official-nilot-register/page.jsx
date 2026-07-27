import OfficialNilotRegisterKeywordPage, { generateMetadata } from './official-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotRegisterKeywordPage />;
}
