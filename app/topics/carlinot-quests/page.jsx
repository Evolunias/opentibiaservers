import CarlinotQuestsKeywordPage, { generateMetadata } from './carlinot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotQuestsKeywordPage />;
}
