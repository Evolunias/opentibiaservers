import TibiaretroQuestsKeywordPage, { generateMetadata } from './tibiaretro-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroQuestsKeywordPage />;
}
