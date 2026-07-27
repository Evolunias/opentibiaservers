import GunzodusQuestsKeywordPage, { generateMetadata } from './gunzodus-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusQuestsKeywordPage />;
}
