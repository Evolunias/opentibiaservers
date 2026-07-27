import ElderaPvpServerPolandKeywordPage, { generateMetadata } from './eldera-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPvpServerPolandKeywordPage />;
}
