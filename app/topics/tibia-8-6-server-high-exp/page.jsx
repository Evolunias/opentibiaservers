import Tibia86ServerHighExpKeywordPage, { generateMetadata } from './tibia-8-6-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerHighExpKeywordPage />;
}
