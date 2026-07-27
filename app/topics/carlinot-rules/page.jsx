import CarlinotRulesKeywordPage, { generateMetadata } from './carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotRulesKeywordPage />;
}
