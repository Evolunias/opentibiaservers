import CustomEvoluniaOnlineKeywordPage, { generateMetadata } from './custom-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaOnlineKeywordPage />;
}
