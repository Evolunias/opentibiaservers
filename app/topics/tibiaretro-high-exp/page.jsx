import TibiaretroHighExpKeywordPage, { generateMetadata } from './tibiaretro-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroHighExpKeywordPage />;
}
