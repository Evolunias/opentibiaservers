import OfficialMidhemRegisterKeywordPage, { generateMetadata } from './official-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemRegisterKeywordPage />;
}
